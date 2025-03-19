let sidebar = document.querySelector('.sidebar');
let inputs = document.querySelectorAll('.sidebar input[type="radio"]');
let tabs = document.querySelectorAll('.account-content section');

for (let i of inputs) {
    if (i.checked) {
        for (let t of tabs) {
            console.log(t.classList.contains(i.id))
            t.classList.contains(i.id) ? t.classList.add('activeTab') : t.classList.remove('activeTab')
        }
    }
}

sidebar.addEventListener('change', (e) => {
    console.log(e.target.tagName)
    for (let tab of tabs) {
        tab.classList.toggle('activeTab');
    }
})