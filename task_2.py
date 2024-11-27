# ii.Write a function which should add the two vowels in the arrays and generate third array and store vowels only once if repeated.



def myfunc(array_1, array_2):
    new_array = array_1 + array_2
    array_3 = []
    for letter in new_array:
        if letter in "aeiou":
            if letter not in array_3:
                array_3.append(letter)
    print(array_3)


myfunc("falcon", "mountain")

