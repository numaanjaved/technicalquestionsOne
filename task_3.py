# iii.Write a program to return the third and last largest number in the array if first largest number is greater than second largest by 20%. 

my_arr = [12, 56, 2, 76, 45, 9, 45, 55, 1]

my_arr.sort()
my_arr.reverse()

print("Array in Descending Order:", "\n\t\t", my_arr)

second = my_arr[2] + my_arr[2]*0.2

if my_arr[0] > second:
    print("\nThird largest number: ", my_arr[2])
    print("Last largest number: ", my_arr[-1])