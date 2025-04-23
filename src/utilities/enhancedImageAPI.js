import axios from 'axios';


const API_KEY = "wx7bk0dgp0fvai02z"
const POST_BASE_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale"
const MAX_RETRIES = 20

export const enhancedImageAPI = async (file) => {

    //Code to call API 
    try {
       const taskId = await uploadImage(file)
       console.log(`Img uploaded successfully, task-ID = ${taskId}`);
       

       const enhancedImageData = await pollForEnhancedImage(taskId)
       console.log(`Enhanced img data: ${enhancedImageData}`);
       return enhancedImageData
       
    }
    catch (error) {
        console.log("Error while enhancing:" , error.message);
    }
}


//Step-1 Code to upload image (POST API)
//Function for Uploading an Image or Sending the image to the API 
const uploadImage = async (file) => {

    const formData = new FormData()
    formData.append("image_file", file )

    const { data } = await axios.post(`${POST_BASE_URL}`, formData, 
        {
        headers: {
            "Content-Type" : "multipart/form-data",
            "X-API-KEY" : API_KEY,
          },
    })

    if(!data ?.data ?.task_id){
        throw new Error("Failed to upload image to the API. TaskID not found ")
    }

    return data.data.task_id
}


//Step-2 Code to fetch enhanced image (GET API)
//Function for Getting back the enhanced from the API
const getEnhancedImage = async (taskId) => {

    const GET_BASE_URL = `https://techhk.aoscdn.com/api/tasks/visual/scale/${taskId}`

    const { data } = await axios.get(GET_BASE_URL , 
        {
        headers: {
            "X-API-KEY" : API_KEY,
          },
    }) 

    if(!data ?.data){
        throw new Error("Failed to get image from the API. image not found ")
    }

    return data.data 
}

//Iss function ka kaam hai ki Jabtak enhanced na mil jaye tab tak getEnhancedImage 
// function ko call krte rhena
const pollForEnhancedImage = async(taskId , retries = 0) => {
    const result = await getEnhancedImage(taskId)

    if(result.state  === 4){

        console.log(`Processing...(${retries} / ${MAX_RETRIES})`);
        
        if(retries >= 20){
            throw new Error("Max retries reached!!")
        }

        //waits my code for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000))

        return pollForEnhancedImage(taskId , retries + 1)
    }
    return result
}
