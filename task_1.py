# i.Write a program which should count Vowels in the strings and return vowels in reverse order if vowels are more than 3. 

my_str = str(input("Enter the string: "))

vowels = ['a', 'e', 'i', 'o', 'u']

detected_vowels = []

for letter in my_str:
    if letter in vowels:
        detected_vowels.append(letter)

num_of_vowels = len(detected_vowels) 
print("Number of vowels: ", num_of_vowels)

if num_of_vowels > 3:
    print("Vowels in Reverse order: ", end="")
    for i in range(0, num_of_vowels):
        print(detected_vowels[num_of_vowels-i-1], end=" ") 