function addItem() {
    /* get value of the user's input */
    let value = document.getElementById('input1').value;

    /* check if user entered something or input is empty */
    if(value == ''){
        alert("Input field must be filled");
    } else {
        /* create row of the table */
        let row = document.createElement('tr');
        row.classList.add('w-100', 'p-0', 'm-0');
        
        /* create cells in the row */
        for(let i = 1; i < 4; i++) {
            window[`cell${i}`] = document.createElement('td');
            switch(i){
                case 1:
                    window[`cell${i}`].id = "tr1";
                    window[`cell${i}`].classList.add('text-center');
                    window[`cell${i}`].style.color = "rgba(255,255,255,0)";      
                    window[`cell${i}`].style.width = "70px";               
                    break;
                case 2:
                    window[`cell${i}`].id = "tr2";
                    window[`cell${i}`].style.width = "auto";
                    window[`cell${i}`].innerText = value;
                    break;                 
                case 3:
                    window[`cell${i}`].className = "tr3";
                    window[`cell${i}`].classList.add('text-center');
                    window[`cell${i}`].style.width = "70px";
                    window[`cell${i}`].innerText = '\u2716';
                    break;
            }
            /* every cell to have all paddings and margins set to zero */
            window[`cell${i}`].classList.add('p-1', 'm-0');
        }

        /* append cells to the row */
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        /* append row to the tbody */
        let parent = document.querySelector('#addedItems').appendChild(row);

        /* reset value of the input */
        let input = document.getElementById('input1');
        input.value = '';


        /***  add click event for row ****/
        row.addEventListener("click", function(){
            let thisCell1 = row.querySelector('#tr1');
            let thisCell2 = row.querySelector('#tr2');
            if(!(row.classList.contains('my-selected'))){
                row.classList.add('my-selected');
                thisCell1.classList.add('correctSign');
                thisCell1.innerText = '\u2713';
                thisCell2.classList.add('text-decoration-line-through');
        } else {
                row.classList.remove('my-selected');
                thisCell1.classList.remove('correctSign');
                thisCell1.innerText = '';
                thisCell2.classList.remove('text-decoration-line-through');
            }
        });

        /* manipulating on the "close" cell */
        var cells3 = document.getElementsByClassName("tr3");
        var i;
        for (i = 0; i < cells3.length; i++) {
            /* on click, remove item */
            cells3[i].onclick = function() {
                var parentOfCells3 = this.parentElement;
                parentOfCells3.style.display = "none";
            }
            /* on hover, change backgroundColor */
            let oldBgColor = cells3[i].style.backgroundColor;
            cells3[i].onmouseover = function() {
                this.style.backgroundColor = "rgb(229, 171, 148)";
                this.style.transition = "0.5s";
            }
            /* when hover over, return old backgroundColor */
            cells3[i].onmouseout = function() {      
                this.style.backgroundColor = oldBgColor;
            }
        }

    }
}
