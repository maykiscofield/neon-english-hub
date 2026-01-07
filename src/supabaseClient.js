import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jhsjunktnzvqpyfjfcqj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoc2p1bmt0bnp2cXB5ZmpmY3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MjEwMDAsImV4cCI6MjA4MzA5NzAwMH0.4wxxBLdo9VWLj2f6am_daUB4kTF_iFi7b1tk-sy5AZ8'

export const supabase = createClient(supabaseUrl, supabaseKey)