const mongoose = require('mongoose')
 const Post = mongoose.model('Post')



exports.add = (req, res)=>{
    res.render('Post/postAdd')
};

 exports.addAction = async(req, res) =>{
    const post = new Post(req.body)     

    try{
        await post.save();

    }catch(error){
        req.flash('error','Erro: ' + error.message)
        res.redirect('/post/add')
        return
    }
   req.flash('success','Post Salvo com sucesso')
    res.redirect('/')
 } 