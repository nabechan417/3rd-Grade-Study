// ========== Supabase 接続設定 ==========
// 5年生アプリと同じ Supabase プロジェクトを利用
// unit_id の使い分け:
//   3年生 算数: 3001〜3014
//   3年生 国語: 4001〜4014

const SUPABASE_URL = 'https://sxwsadvfcvljeuisqdkb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4d3NhZHZmY3ZsamV1aXNxZGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NTE4MDUsImV4cCI6MjA5MTIyNzgwNX0.i2mfraTCXhAduHbSi2yuC62lv6n-EGGG6j55FXnj908';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
