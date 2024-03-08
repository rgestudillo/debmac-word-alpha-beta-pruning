# Read valid words from a text file
def read_valid_words(file_path):
    with open(file_path, 'r') as file:
        return file.read().splitlines()

# Convert list of words to JavaScript set string
def words_to_js_set_string(words):
    js_set_string = "const validWords = new [\n"
    for word in words:
        js_set_string += f"  '{word}',\n"
    js_set_string += "];"
    return js_set_string

def main():
    input_file_path = '3-letter-words.txt'  # Replace with your file path
    output_file_path = 'answer.txt'
    
    # Read valid words from input file
    words = read_valid_words(input_file_path)
    
    # Convert words to JavaScript set string
    js_set_string = words_to_js_set_string(words)
    
    # Write JavaScript set string to output file
    with open(output_file_path, 'w') as file:
        file.write(js_set_string)

if __name__ == "__main__":
    main()
