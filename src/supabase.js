import { createClient } from '@supabase/supabase-js';

// TODO: Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://jsdpbrvqejntymylhoxd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZHBicnZxZWpudHlteWxob3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTUwMDQsImV4cCI6MjA2NTk5MTAwNH0.CH-Vtwj3Qoms6lRm14Ai-3J4Mw9YsAQI8WhMIRY6GSc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);