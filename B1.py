n=int(input("enter the no of elements"))
a=[]
for i in range(1,n+1):
    x=int(input("enter the element"))
    a.append(x)

def dup(li):
    newli=[]
    for i in li:
        if i not in newli:
            newli.append(i)
    return newli

def rem_even(li):
    newli=[x for x in li if x%2 == 0]
    return newli

def rev(a):
    a.reverse()
    return a

print(dup(a))
print(rev(a))
print(rem_even(a))