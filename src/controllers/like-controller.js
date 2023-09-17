import LikeService from "../services/like-service";
export const toggleLike = async (req,res)=>{
    try {
        const response = await LikeService.toggleLike(req.query.modelId, req.params.modelType , req.body.userId);
        return res.status(200).json({
            success: true,
            data : response ,
            err :{},
            message : 'Successfully toggled like'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data : {},
            message : 'Something went wrong',
            err : error

        })
    }
}