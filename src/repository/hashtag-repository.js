const Hashtag = require('../models/hashtags');
 

class HashtagRepository{

    async create(data){
       try {
        const tag = await Hashtag.create(data);
        return tag;
       } catch (error) {
       
       }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
          
        } catch (error) {
            console.log('ede');
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
          console.log('error');
        }
    }
 
 

    async destroy(id){
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
          console.log('error');
        }
    }
 

}

module.exports = HashtagRepository;