import sys

def main(): 
    print ("Hello World!")
    for v in sys.argv[1:]:
        print(v)

main()