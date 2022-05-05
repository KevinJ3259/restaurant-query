function dragMenuItem(menuItemNode, menuItem) {
    let previousHtml;
    menuItemNode.setAttribute("draggable", "true")
    function handleDragStart(e) {
        this.style.opacity = '0.4';
        if (menuItem) {

        e.dataTransfer.effectAllowed = 'move';
        
        e.dataTransfer.setData('text/html', this.innerHTML);
        e.dataTransfer.setData('menuItem', JSON.stringify(menuItem));
        
        previousHtml = document.getElementById("your-favorites").innerHTML
         document.getElementById("your-favorites").innerHTML=""   }
        
      }
      
      function handleDragEnd(e) {
        this.style.opacity = '1';
        console.log("handleDragEnd")
        document.getElementById("your-favorites").innerHTML+=previousHtml
      }
      function handleDragOver(e) {
        e.preventDefault();
        return false;
      }
    
      function handleDragEnter(e) {
        this.classList.add('over');
      }
    
      function handleDragLeave(e) {
        this.classList.remove('over');
      }
      function handleDrop(e) {
          
        e.stopPropagation(); // stops the browser from redirecting.
        if (menuItemNode === e.target && !menuItem)
        {
           menuItemNode.innerHTML=menuItemNode.innerHTML||"" 
            menuItemNode.innerHTML+=e.dataTransfer.getData('text/html');
            favorites.addFavorite(JSON.parse(e.dataTransfer.getData("menuItem")))
        }

        return false;

      }
      menuItemNode.addEventListener('dragstart', handleDragStart);
      menuItemNode.addEventListener('dragover', handleDragOver);
      menuItemNode.addEventListener('dragenter', handleDragEnter);
      menuItemNode.addEventListener('dragleave', handleDragLeave);
      menuItemNode.addEventListener('dragend', handleDragEnd);
      menuItemNode.addEventListener('drop', handleDrop);

} 