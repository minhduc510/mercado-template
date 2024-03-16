const listLevelItem = document.querySelectorAll('.list-level-item')

const removeActiveLevel = () => {
    const listLevelItem = document.querySelectorAll('.list-level-item')
    listLevelItem.forEach(item => {
        item.classList.remove('active')
    })
}

const hiddenGroupsInfo = () => {
    const groupsInfo = document.querySelectorAll('.group-info')
    groupsInfo.forEach(item => {
        if (!item.classList.contains('d-none')) {
            item.classList.add('d-none')
        }
    })
}

listLevelItem.forEach(item => {
    item.onclick = function () {
        removeActiveLevel()
        this.classList.add('active')
        hiddenGroupsInfo()
        const warehouseList = document.getElementById(`${this.id}_list`)
        warehouseList.classList.remove('d-none')
    }
})

setPickerByElementId('date_from')
setPickerByElementId('date_to')