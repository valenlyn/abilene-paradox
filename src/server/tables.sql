-- create tables
CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  url TEXT,
  topic TEXT,
  num_participants INTEGER DEFAULT 0,
  current_num_participants INTEGER DEFAULT 0,
  user_id INTEGER DEFAULT 0,
  status BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  modified_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  img TEXT,
  room_id INTEGER,
  created_at TIMESTAMPTZ DEFAULT now(),
  modified_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS options (
  id SERIAL PRIMARY KEY,
  option TEXT,
  room_id TEXT,
  user_id TEXT,
  merged BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  modified_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  rating INTEGER,
  user_id TEXT,
  option_id INTEGER,
  created_at TIMESTAMPTZ DEFAULT now(),
  modified_at TIMESTAMPTZ DEFAULT now()
);