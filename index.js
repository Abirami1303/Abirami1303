function displayUsers(pageNumber, pageSize) {
    const userListContainer = document.getElementById('userList');
    const paginationContainer = document.getElementById('pagination');


    // Clear existing content
    userListContainer.innerHTML = '';
    paginationContainer.innerHTML = '';


    // Calculate start and end index based on page number and page size
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const usersToShow = jsonData.slice(startIndex, endIndex);


    // Create user list table
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHeader = document.createElement('tr');
    const thId = document.createElement('th');
    thId.textContent = 'ID';
    const thName = document.createElement('th');
    thName.textContent = 'Name';
    const thEmail = document.createElement('th');
    thEmail.textContent = 'Email';
    trHeader.appendChild(thId);
    trHeader.appendChild(thName);
    trHeader.appendChild(thEmail);
    thead.appendChild(trHeader);
    table.appendChild(thead);
    table.appendChild(tbody);


    // Populate user list table
    usersToShow.forEach(user => {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        tdId.textContent = user.id;
        const tdName = document.createElement('td');
        tdName.textContent = user.name;
        const tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tbody.appendChild(tr);
    });


    userListContainer.appendChild(table);


    // Create pagination links
    const totalPages = Math.ceil(jsonData.length / pageSize);
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', function() {
        if (pageNumber > 1) {
            displayUsers(pageNumber - 1, pageSize);
}});
paginationContainer.appendChild(prevButton);
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = i;
        link.href = '#';
        li.appendChild(link);
        if (i === pageNumber) {
            li.classList.add('active');
        }
        link.addEventListener('click', function(event) {
            event.preventDefault();
            displayUsers(i, pageSize);
        });
        paginationContainer.appendChild(li);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', function() {
        if (pageNumber < totalPages) {
            displayUsers(pageNumber + 1, pageSize);
        }
    });
    paginationContainer.appendChild(nextButton);
}



// Initial display with page number 1 and 10 users per page
displayUsers(1, 10);