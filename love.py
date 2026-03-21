import time
import sys
import base64
import os

def slow_print(text, delay=0.05):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def loading():
    slow_print("Initializing secure module...", 0.04)
    for i in range(3):
        sys.stdout.write("\rDecrypting feelings" + "." * (i + 1))
        sys.stdout.flush()
        time.sleep(1)
    print("\n")

def hearts():
    heart = ["  ♥   ♥  ",
             " ♥ ♥ ♥ ♥ ",
             "  ♥ ♥ ♥  ",
             "    ♥    "]
    for _ in range(2):
        for line in heart:
            slow_print(line, 0.02)
        time.sleep(0.5)
        os.system("cls" if os.name == "nt" else "clear")

def reveal():
    x = (
        "U3VtZGVkaGEgWW91IGFyZSB0aGUgYmVzdCBwZXJzb24gbXkgYmVzdCBmcmllbmQgbXkgc2VjcmV0IGtlZXBlcgoKYW5kIEkgbG92ZSB5b3Ugc28gbXVjaCB0aGFua3MgZm9yIG1ha2luZyBteSBsaWZlIGZlZWxzIGFtYXppbmcgYWdhaW4KCkkgbG92ZSB5b3UgYW5kIEknbGwgYWx3YXlzIGxvdmUgeW91"
    )
    msg = base64.b64decode(x).decode()

    slow_print("Message unlocked ❤️\n", 0.06)
    time.sleep(1)

    for line in msg.split("\n"):
        slow_print(line, 0.06)
        time.sleep(0.6)

if __name__ == "__main__":
    os.system("cls" if os.name == "nt" else "clear")
    loading()
    hearts()
    reveal()
    slow_print("\n— End of program —", 0.04)
