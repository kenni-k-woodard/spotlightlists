const SUPABASE_URL = 'https://redfcyboqrqwpbcseyiu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZGZjeWJvcXJxd3BiY3NleWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjAsImV4cCI6MTk4MzY4NDA2MH0.OoXlk2kwsTh4QiT7WNyjocL1GPxxVvERWoKwz167v0o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPets() {
    const response = await client.from('pets').select('*');
    return response.data;
}

export async function fetchSnacks() {
    const response = await client.from('snacks').select('*');
    return response.data;
}

export async function fetchDrinks() {
    const response = await client.from('drinks').select('*');
    return response.data;
}
