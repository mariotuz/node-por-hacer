const descripcion = {
    demand: true,
    alias: 'd'
}

const opts2 = {
    descripcion,
    completado: {
        default: true,
        alias: 'c'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts2)
    .command('borrar', 'Borra un elemento por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}