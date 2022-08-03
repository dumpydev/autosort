import os
def sort(file, dir, newdir):
    print("Sorting: " + file)
    if not os.path.isdir(os.path.join(dir, newdir)):
        os.mkdir(os.path.join(dir, newdir))
        os.rename(os.path.join(dir, file), os.path.join(dir, newdir, file))
    else:
        os.rename(os.path.join(dir, file), os.path.join(dir, newdir, file))


def main():
    dir = input("Enter a directory (leave empty for current): ")
    if dir == "":
        dir = os.getcwd()
    else:
        dir = os.path.abspath(dir)
    if not os.path.isdir(dir):
        print("Invalid directory")
        return

    print("Directory: " + dir)
    print("Directory Listing:")
    for file in os.listdir(dir):
        # is dir
        if os.path.isdir(os.path.join(dir, file)):
            print("DIR: "+ file)
        # is file
        else:
            print("FILE: " + file)
    print("Continue witht the sort?")
    continue1 = input("Y/n: ")
    if continue1.lower() == "y" or continue1.lower() == "":
        for file in os.listdir(dir):
            if os.path.isdir(os.path.join(dir, file)):
                print("DIR: "+ file)
            else:
                first3 = file[0:3]
                if first3 == 'ENG':
                    sort(file, dir, "English")
                elif first3 == "MAT":
                    sort(file, dir, "Math")
                elif first3 == "SCI":
                    sort(file, dir, "Science")
                elif first3 == "SPE":
                    sort(file, dir, "Special")
                elif first3 == "HIS":
                    sort(file, dir, "History")
                elif first3 == "ART":
                    sort(file, dir, "Art")
                elif first3 == "PEA":
                    sort(file, dir, "PE")
                elif first3 == "SOC":
                    sort(file, dir, "Social")
                elif first3 == "BIO":
                    sort(file, dir, "Biology")
                elif first3 == "CHE":
                    sort(file, dir, "Chemistry")
                elif first3 == "PHY":
                    sort(file, dir, "Physics")
                elif first3 == "GEO":
                    sort(file, dir, "Geography")

                else:
                    print("Not a valid file name: " + file)
    else: 
        exit()
main()