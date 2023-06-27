// Função para adicionar evento de clique nos itens com submenu
function addClickEventToSubmenuItems() {
    var submenuItems = document.querySelectorAll('.has-submenu');
    submenuItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
      });
    });
  }
  
  // Adiciona evento de clique ao carregar a página
  window.addEventListener('DOMContentLoaded', function() {
    addClickEventToSubmenuItems();
  });
  
  // Adiciona evento de clique ao redimensionar a janela
  window.addEventListener('resize', function() {
    addClickEventToSubmenuItems();
  });
  