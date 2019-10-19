#n = [int(x) for x in input('enter the numbers:').split()]
#print(n)
def Max(n):
    if len(n) == 1:
        return n[0]
    else:
        m = Max(n[1:])
        return m if m > n[0] else n[0]
#print(Max(n))
import functools
li=[1,2,3,4,5,6]
newli=[i*3 for i in li]
print(newli)
lambsum = functools.reduce((lambda x,y:x+y),li)
print(lambsum)
lambsum2 = functools.reduce((lambda x,y:x+y),newli)
print(lambsum2)
lambsum3 = functools.reduce((lambda x,y:x*y),newli)
print(lambsum3)
