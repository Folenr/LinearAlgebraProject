import numpy as np
import sympy as sp
import webview

class Matrix:
    def __init__(array,row=1,col=1,A=[]):
        array.row = row
        array.col = col
        if(A==[]):
          array.A = np.empty(shape=(row,col) ,dtype=int)
        else:
          array.A = A

    def set(array):
        array.row = int(input("rows: "))
        array.col = int(input("columns: "))
        array.A = np.empty(shape=(array.row, array.col), dtype=int)

        for i in range(array.row):
            for j in range(array.col):
                array.A[i,j] = int(input())
        
    def print(array):
        print(array.A)

    def inverse(array):
         return np.linalg.inv(array.A)  
    
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
     
    def linDep(array):
        M = sp.Matrix(array.A)
        rank = M.rank()

        if rank == array.col:
            return "The set of vectors is Linearly Independent"
        else:
            return "The set of vectors is Linearly Dependent"
     
    def basisDimension(array):
        M = sp.Matrix(array.A)
        rref_M, pivots = M.rref()
        
        basis_vectors = [M.col(i) for i in pivots]
        dimension = len(pivots)

        return basis_vectors, dimension

    def colSpace(array):
        M = sp.Matrix(array.A)
        return M.columnspace()

    def rowSpace(array):
        M = sp.Matrix(array.A)
        return M.rowspace()
    
    def eigen(array):
         return np.linalg.eig(array.A)
    
    def diag(array):
         M = sp.Matrix(array.A)
         return M.diagonalize()
    
    def diagVerify(array):
         P, D = array.diag()
         return P * D * P.inv()


mat1 = Matrix(3,3,[[1,2,3],[4,5,6],[7,8,9]])
mat1.print()

class API:
    def say_hello(self):
        print("Hello from JavaScript!")

api = API()
window = webview.create_window('My App', 'index.html', js_api=api)
webview.start()