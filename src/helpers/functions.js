const shrten = title => {
    const shortTilte = title.split(" ");
    return `${shortTilte[0] + shortTilte[1]}`
}

const isInCart = (state , id) => {
    const is = !!state.selectedItem.find(item => item.id === id) 
    return is;
}

const quantityCounter = (state , id) => {
    const index = state.selectedItem.findIndex(item => item.id === id)
    if(index === -1){
        return false
    } else {
        return state.selectedItem[index].quantity
    }
    
}



export {shrten , isInCart , quantityCounter}