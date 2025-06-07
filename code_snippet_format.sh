#!/bin/bash

# Format code snippets to insert in a blog post.
# Usage:
# ./code_format.sh -p <file_path>
# where <file_path> is the path of the file with the code snippet.
# The script creates an output file "code_snippet_formatted.txt".

function display_help() {
    echo "Usage: ./code_format.sh -p <file_path>"
    echo "  -p, --path   Path of the file with the code snippet"
}

# Check arguments
if [ $# -le 1 ]; then
    display_help
    exit 0
fi
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
    display_help
    exit 0
fi
if ! ([ "$1" == "-p" ] || [ "$1" == "--path" ]); then
    display_help
    exit 1
fi

code_snippet_file_path="$2"
tmp_code_snippet_file_name="tmp_code_snippet_formatted.txt"
output_code_snippet_file_name="code_snippet_formatted.txt"

# Check if the file with the code snippet exists
if [ ! -f "$code_snippet_file_path" ]; then
    echo "File \"$code_snippet_file_path\" not found."
    exit 1
fi

# Replace the occurrences of the character whitespace with the encoded value &nbsp; 
# when two or more whitespaces appear in sequence
awk '{
  line = $0
  while (match(line, /[[:space:]]{2,}/)) {
    ws = substr(line, RSTART, RLENGTH)
    value = ""
    for (i = 1; i <= length(ws); i++) {
      value = value "&nbsp;"
    }
    line = substr(line, 1, RSTART - 1) value substr(line, RSTART + RLENGTH)
  }
  print line
}' "$code_snippet_file_path" > "$tmp_code_snippet_file_name"

# Replace the occurrences of the character { with the encoded value &#123;
awk '{
  line = $0
  while (match(line, /\{/)) {
    ws = substr(line, RSTART, RLENGTH)
    value = ""
    for (i = 1; i <= length(ws); i++) {
      value = value "&#123;"
    }
    line = substr(line, 1, RSTART - 1) value substr(line, RSTART + RLENGTH)
  }
  print line
}' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

mv "$output_code_snippet_file_name" "$tmp_code_snippet_file_name"

# Replace the occurrences of the character } with the encoded value &#125;
awk '{
  line = $0
  while (match(line, /\}/)) {
    ws = substr(line, RSTART, RLENGTH)
    value = ""
    for (i = 1; i <= length(ws); i++) {
      value = value "&#125;"
    }
    line = substr(line, 1, RSTART - 1) value substr(line, RSTART + RLENGTH)
  }
  print line
}' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

mv "$output_code_snippet_file_name" "$tmp_code_snippet_file_name"

# Replace the occurrences of the character > with the encoded value &gt;
awk '{
  line = $0
  while (match(line, /\>/)) {
    ws = substr(line, RSTART, RLENGTH)
    value = ""
    for (i = 1; i <= length(ws); i++) {
      value = value "&gt;"
    }
    line = substr(line, 1, RSTART - 1) value substr(line, RSTART + RLENGTH)
  }
  print line
}' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

mv "$output_code_snippet_file_name" "$tmp_code_snippet_file_name"

# Replace the occurrences of the character < with the encoded value &lt;
awk '{
  line = $0
  while (match(line, /\</)) {
    ws = substr(line, RSTART, RLENGTH)
    value = ""
    for (i = 1; i <= length(ws); i++) {
      value = value "&lt;"
    }
    line = substr(line, 1, RSTART - 1) value substr(line, RSTART + RLENGTH)
  }
  print line
}' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

mv "$output_code_snippet_file_name" "$tmp_code_snippet_file_name"

# Add <br /> after every line in the file
awk '{ print; print "<br />" }' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

mv "$output_code_snippet_file_name" "$tmp_code_snippet_file_name"

# Remove all empty lines
grep -v '^[[:space:]]*$' "$tmp_code_snippet_file_name" > "$output_code_snippet_file_name"

rm "$tmp_code_snippet_file_name"