const Usuario = require("../models/Usuario");

exports.crearusuario= async(req, res)  =>{
    try {
        let usuario;
        usuario = new Usuario(req.body); 
        await usuario.save();
       res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')   
    }
}

exports.obtenerusuarios= async(req, res) =>{
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}
exports.actualizarusuarios = async(req, res) =>{
    try {
        const {nombre, apellido, encrypt, imagen, isregistro, mensaje, nombrep  } = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:'No existe el producto'})
        }
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.encrypt = encrypt;
        usuario.imagen = imagen;
        usuario.isregistro = isregistro;
        usuario.mensaje = mensaje;
        usuario.nombrep = nombrep;

        usuario = await Usuario.findByIdAndUpdate({_id: req.params.id}, usuario, {new:true})
        res.json(usuario)



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}
exports.obtenerusuario = async(req, res) =>{
    try {
        
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:'No existe el producto'})
        }
            res.json(usuario)



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}

exports.eliminarusuario = async(req, res) =>{
    try {
        
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:'No existe el producto'})
        }
        await Usuario.findOneAndRemove({_id: req.params.id });
        res.json({msg: 'Producto eliminado con exito'})



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')  
    }
}