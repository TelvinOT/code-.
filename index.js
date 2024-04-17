document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addRecordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const bookName = document.getElementById('bookName').value;
    const dateTaken = document.getElementById('dateTaken').value;
    const dateReturned = document.getElementById('dateReturned').value || '-';

    const record = `
      <tr>
        <td>${studentName}</td>
        <td>${bookName}</td>
        <td>${dateTaken}</td>
        <td>${dateReturned}</td>
      </tr>
    `;
    document.getElementById('recordsTableBody').insertAdjacentHTML('beforeend', record);

    // Clear form fields
    document.getElementById('addRecordForm').reset();

    // Close modal
    $('#addRecordModal').modal('hide');
  });
});
