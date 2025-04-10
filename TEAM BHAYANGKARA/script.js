// Data Event
const events = [
    {
        id: 1,
        title: "Konser Musik",
        description: "Nikmati malam penuh musik dengan artis terkenal.",
        date: "2023-12-01",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Workshop Fotografi",
        description: "Pelajari teknik fotografi dari profesional.",
        date: "2023-12-05",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Seminar Kewirausahaan",
        description: "Dapatkan wawasan dari pengusaha sukses.",
        date: "2023-12-10",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Pameran Seni",
        description: "Jelajahi karya seni dari seniman lokal.",
        date: "2023-12-15",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        title: "Festival Kuliner",
        description: "Cicipi berbagai hidangan dari seluruh dunia.",
        date: "2023-12-20",
        image: "https://via.placeholder.com/150"
    }
];

// Menampilkan Event di Halaman Events
function displayEvents() {
    const eventCards = document.getElementById('event-cards');
    events.forEach(event => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description}</p>
                        <button class="btn btn-primary" onclick="showEventDetails(${event.id})">Lihat Detail</button>
                    </div>
                </div>
            </div>
        `;
        eventCards.innerHTML += card;
    });
}

// Menampilkan Detail Event di Modal
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    document.getElementById('eventModalLabel').innerText = event.title;
    document.getElementById('eventModalBody').innerHTML = `
        <p>${event.description}</p>
        <p>Tanggal: ${event.date}</p>
    `;
    $('#eventModal').modal('show');
}

// Menyimpan Data Pendaftaran ke localStorage
function saveRegistration() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventChoice = document.getElementById('eventChoice').value;
    const ticketCount = document.getElementById('ticketCount').value;

    if (!name || !email || !eventChoice || !ticketCount) {
        alert("Semua field wajib diisi!");
        return;
    }

    const totalPrice = ticketCount * 75000; // Misalnya Rp 75.000 per tiket
    const registrationData = {
        name,
        email,
        event: eventChoice,
        tickets: ticketCount,
        total: totalPrice
    };

    localStorage.setItem('registrationData', JSON.stringify(registrationData));
    window.location.href = 'summary.html';
}

// Menampilkan Data Pendaftaran di Halaman Ringkasan
function displaySummary() {
    const data = JSON.parse(localStorage.getItem('registrationData'));
    if (data) {
        document.getElementById('summaryName').innerText = data.name;
        document.getElementById('summaryEmail').innerText = data.email;
        document.getElementById('summaryEvent').innerText = data.event;
        document.getElementById('summaryTickets').innerText = data.tickets;
        document.getElementById('summaryTotal').innerText = `Rp ${data.total}`;
    }
}

// Menghapus Data dari localStorage
function clearData() {
    localStorage.removeItem('registrationData');
    alert("Data pendaftaran telah dihapus.");
    window.location.href = 'index.html';
}