pkill python
pkill nc
python -m SimpleHTTPServer 8000 &
nc -l 8888 < ./second &
nc -l 7777
