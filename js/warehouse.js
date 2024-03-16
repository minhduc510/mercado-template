const listLevelItem = document.querySelectorAll('.list-level-item')

const removeActiveLevel = () => {
    const listLevelItem = document.querySelectorAll('.list-level-item')
    listLevelItem.forEach(item => {
        item.classList.remove('active')
    })
}

const hiddenWarehouseList = () => {
    const warehouseList = document.querySelectorAll('.warehouse-list')
    warehouseList.forEach(item => {
        if (!item.classList.contains('d-none')) {
            item.classList.add('d-none')
        }
    })
}

listLevelItem.forEach(item => {
    item.onclick = function () {
        removeActiveLevel()
        this.classList.add('active')
        hiddenWarehouseList()
        const warehouseList = document.getElementById(`${this.id}_list`)
        warehouseList.classList.remove('d-none')
    }
})