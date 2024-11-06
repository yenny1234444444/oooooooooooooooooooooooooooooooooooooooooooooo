document.getElementById(`menu-toggle`).addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    //Cuando se da el evento click por primera vez, se oculta
    sidebar.classList.toggle('hidden');

    //Cuando el menú está cerrado, cambia en el main content a estado shifted
    if(sidebar.classList.contains('hidden')){
        mainContent.classList.add('shifted');
    } else {
        mainContent.classList.remove('shifted');
    }
});

document.querySelectorAll('.sidebar-item').forEach(item=>{
    item.addEventListener('click',function(){
        document.querySelectorAll('.sidebar-item').forEach(i=>{
            if(i != this){
                i.classList.remove('active');
            }
        })
        this.classList.toggle('active')
    });
});

document.getElementById('user-photo').addEventListener('click',function(){
    const dropDown = document.getElementById('dropdown');
    dropDown.classList.toggle('show');
})

document.addEventListener('click', function(event){
    const userPhoto = document.getElementById('user-photo');
    const dropDown = document.getElementById('dropdown');

    if(!userPhoto.contains(event.target) && ! dropDown.contains(event.target)){
        dropDown.classList.remove('show');
    }
})

document.getElementById('close-btn-create').addEventListener('click',function(){
    document.getElementById('modal-create').style.display=none;
});

document.querySelectorAll('.submenu-item').forEach(item=>{
    if(item.textContent=='Crear'){
        item.addEventListener('click',function(){
            document.getElementById('modal-create').style.display='flex';
        });
    }
});

const currentPath = window.location.pathname;

if (currentPath == '/dashboard.html'){
    document.querySelectorAll('.edit-btn').forEach(button =>{
        button.addEventListener('click', function(){
            const card = this.closest('.card');
            const fullName = card.querySelector('h3').innerText.split(": ")[1];
            const typeDocument = card.querySelector('p:nth-child(2)').innerText.split(': ')[1];
            const numberDocument = card.querySelector('p:nth-child(3)').innerText.split(': ')[1];
            const fileId = card.querySelector('p:nth-child(4)').innerText.split(': ')[1];
            const role = card.querySelector('p:nth-child(5)').innerText.split(': ')[1];
            const status = card.querySelector('p:nth-child(6)').innerText.split(': ')[1];

            //console.log(fullName, typeDocument, numberDocument, fileId, role, status);

            document.getElementById('editFullname').value = fullName;
            document.getElementById('editDocumentType').value = DocumentType;
            document.getElementById('editDocumentNumber').value = DocumenNumber;
            document.getElementById('editFileId').value = FileId;
            document.getElementById('editRole').value = Role;
            document.getElementById('editStatus').value = Status;

            document.getElementById('modal-edit').style.display = 'flex';
        });
    });
}

const imagenes = document.querySelector('.imagenes');

imagenes.addEventListener('mouseover', () => {
    imagenes.style.animationPlayState = 'paused';
});

imagenes.addEventListener('mouseout', () => {
    imagenes.style.animationPlayState = 'running';
});