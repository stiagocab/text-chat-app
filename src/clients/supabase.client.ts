import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "SUPABASE_URL y SUPABASE_ANON_KEY deben estar definidos en el archivo .env",
  );
}

// Inicializamos el cliente
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  },
});

export default supabase;



async function testConnection() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error('❌ Error conectando a Supabase Local:', error.message);
  } else {
    console.log('✅ Conexión con Supabase Local establecida.');
  }
}

testConnection();