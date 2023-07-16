import sys
# Takes first name and last name via command
# line arguments and then display them
# print("Output from Python")
# print("First name: " + sys.argv[1])
# print("Last name: " + sys.argv[2])
print(sys.argv)
for c in sys.argv[1:]:
    for x in range(1,11):
        print(f"{c}*{x}={x*int(c)}")
# save the script as hello.py

