const search = (value,data,container)=>{
    container.innerHTML='';
    const results =  data.filter(m=> m.title.toLowerCase().includes(value.toLowerCase()));
    console.log(results)
    Swal.fire(
        'Se a reaizado su busqueda',
        `Termino buscado: ${value}`,
        `Cantidad de resultados: `
      )
    return results
}

export default search;