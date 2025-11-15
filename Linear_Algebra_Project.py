import numpy as np
import sympy as sp

class Matrix:
    def __init__(array,row=1,col=1,A=[]):
        array.row = row
        array.col = col
        array.A = np.empty(shape=(0,0) ,dtype=int)

    def set(array):
        array.row = int(input("rows: "))
        array.col = int(input("columns: "))
        array.A = np.empty(shape=(array.row, array.col), dtype=int)

        for i in range(array.row):
            for j in range(array.col):
                array.A[i,j] = int(input())
        
    def print(array):
        print(array.A)

    def ref(array):
         return sp.Matrix(array.A).echelon_form()
    
    def rref(array):
         return sp.Matrix(array.A).rref()
    
    def det(array):
         return int(np.linalg.det(array.A))

    def algebra(A,B,opr):
            match opr:
                 case '+':
                      return np.add(A.A, B.A)
                 case '-':
                      return np.subtract(A.A, B.A)
                 case '/':
                      return np.divide(A.A, B.A)
                 case '*':
                      return np.multiply(A.A, B.A)
                 case '.':
                      return np.dot(A.A, B.A)
     
    def cramer(A,B):
         d = A.det()
         n = Matrix()
         n.row = A.row
         n.col = A.col
         for i in range(A.col):
              n.A = np.copy(A.A)
              n.A[:,i] = B.A
              dn = n.det()
              print(dn/d)
     
    def dep(A):
         if A.det() == 0:
              print("The Matrix is Linear dependence")
         else:
              print("The Matrix is Linear independence")


mat1 = Matrix()
mat1.set()
mat2 = Matrix()
#mat2.set()
mat3 = Matrix()
#mat3.set()
Matrix.dep(mat1)