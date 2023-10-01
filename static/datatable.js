var table = new DataTable('#table');
var storedData = localStorage.getItem('tableData');

if (storedData) {
    var parsedData = JSON.parse(storedData);
    parsedData.forEach(function (row) {
      table.row.add(row).draw(false);
    });
  }

function addRow() {
    let operation = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    let date = document.getElementById('transactionDate').value;
    let currency = document.getElementById('selectCurrency').value;
    let amount = document.getElementById('amount').value;
    
    if (!date) {
        alert("Please enter the transaction date")
        return;
    } else if (!amount) {
        alert("Please enter the amount")
        return;
    }

    table.row.add([operation, date, currency, amount]).draw();

    // Save row data in localStorage
    var currentData = table.rows().data().toArray();
    localStorage.setItem('tableData', JSON.stringify(currentData));
}

// Function used to delete row data
function clearHistory() {
    localStorage.removeItem('tableData');
    location.reload();
}

document.querySelector('#addTxn').addEventListener('click', addRow);
document.getElementById('clearTxn').addEventListener('click', clearHistory)