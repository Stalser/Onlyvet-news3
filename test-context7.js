const { default: fetch } = require('node-fetch');

async function testContext7() {
  console.log('=== Testing Context7 MCP ===\n');
  console.log('API Key: ctx7sk-4202e708-96e2-4f70-8593-f9b024759672\n');
  
  // Test 1: Health check
  const healthRes = await fetch('http://localhost:3006/health');
  const health = await healthRes.json();
  console.log('✅ Health:', JSON.stringify(health, null, 2));
  
  // Test 2: Search documentation
  const searchRes = await fetch('http://localhost:3006', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      action: 'search', 
      library: 'nextjs', 
      query: 'middleware' 
    })
  });
  const search = await searchRes.json();
  console.log('\n📚 Search Result (Next.js Middleware):');
  console.log(JSON.stringify(search.result.links, null, 2));
  
  // Test 3: Get libraries
  const libsRes = await fetch('http://localhost:3006', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'libraries' })
  });
  const libs = await libsRes.json();
  console.log('\n📖 Available Libraries:', libs.result.libraries.join(', '));
  
  console.log('\n✅ Context7 MCP ready to use!');
}

testContext7().catch(console.error);
