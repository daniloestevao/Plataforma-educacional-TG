import mysql.connector

# Configurações do banco de dados
db_config = {
    'host': 'localhost',
    'user': 'tsserver',
    'password': '7150662802Fg@#',
    'database': 'danbestcourses_db'
}

# Conecta ao banco de dados
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# Função para inserir dados na tabela de professores
def inserir_professor(nome, whatsapp, email):
    query = "INSERT INTO cad_prof (nome, whatsapp, email) VALUES (%s, %s)"
    values = (nome, whatsapp, email)
    cursor.execute(query, values)
    conn.commit()

# Fechar a conexão quando não precisar mais
conn.close()
