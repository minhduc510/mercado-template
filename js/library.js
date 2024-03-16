// DATE PIKADAY
const setPickerByElementId = (idElement) => {
    const picker = new Pikaday({
        field: document.getElementById(idElement),
        toString(date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        i18n: {
            previousMonth: 'Tháng trước',
            nextMonth: 'Tháng sau',
            months: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'THáng 12'],
            weekdays: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
            weekdaysShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
        }
    });
}