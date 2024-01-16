const topoDoSite = document.querySelector('#topo-do-site');
const botaoAbout = document.querySelector('#botaoAbout');
const botaoPortifolio = document.querySelector('#btn-portifolio');
const projetos = document.querySelector('.projetos');
const botaoProjects = document.querySelector('#botaoProject');
const botaoStacks = document.querySelector('#stacks');
const especialidades = document.querySelector('#especialidades');
const botaoContato = document.querySelector('#botaoContato');
const forms = document.querySelector('#forms');

botaoAbout.addEventListener('click', scrollToTop);
botaoPortifolio.addEventListener('click', scrollToProjects);
botaoProject.addEventListener('click', scrollToProjects);
botaoStacks.addEventListener('click', scrollToEspecialidades);
botaoContato.addEventListener('click', scrollToForms);

function scrollToTop() {
    topoDoSite.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    projetos.scrollIntoView({ behavior: 'smooth' });
}
function scrollToEspecialidades(){
    especialidades.scrollIntoView({ behavior: 'smooth' });
}
function scrollToForms(){
    forms.scrollIntoView({behavior: 'smooth'});
}