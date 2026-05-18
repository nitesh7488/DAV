const http = require('http');

const makeRequest = (options, data = null) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    
    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
};

async function testLibrary() {
  console.log('--- Testing Library API ---');
  
  // 1. Add Book
  console.log('\n1. Adding a new book...');
  const addRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/library/books',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    title: 'Test Automated Book',
    author: 'Auto Bot',
    isbn: 'AUTO-ISBN-' + Date.now(),
    totalCopies: 5
  });
  console.log('Status:', addRes.status);
  console.log('Response:', addRes.data);
  const bookId = addRes.data.book?.id;
  if (!bookId) throw new Error('Book ID not found in response');

  // 2. Get Books
  console.log('\n2. Fetching books list...');
  const getBooksRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/library/books',
    method: 'GET'
  });
  console.log('Total books:', getBooksRes.data.length);
  
  // 3. Issue Book
  console.log('\n3. Issuing book to student...');
  const studentId = '4af6e4a2-ee00-450c-b85a-3975216e9ac8';
  const issueRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/library/issues',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    bookId: bookId,
    studentId: studentId
  });
  console.log('Status:', issueRes.status);
  console.log('Response:', issueRes.data);

  // 4. Get Global Issues Log
  console.log('\n4. Fetching global issues log...');
  const getIssuesRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/library/issues',
    method: 'GET'
  });
  console.log('Total issues:', getIssuesRes.data.length);
  const latestIssue = getIssuesRes.data[0];
  console.log('Latest Issue Details:');
  console.log(`- Book: ${latestIssue?.book?.title}`);
  console.log(`- Student: ${latestIssue?.student?.firstName} ${latestIssue?.student?.lastName}`);
  console.log(`- Issue Date: ${latestIssue?.issueDate}`);
  console.log(`- Due Date: ${latestIssue?.dueDate}`);

  console.log('\n--- Test Completed Successfully ---');
}

testLibrary().catch(console.error);
