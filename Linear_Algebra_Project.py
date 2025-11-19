import numpy as np
import sympy as sp
import webview
import io
import sys
import os

class Matrix:
    def __init__(array,row=1,col=1,A=[]):
        array.row = row
        array.col = col
        if(A==[]):
          array.A = np.empty(shape=(row,col) ,dtype=float)
        else:
          array.A = A

    def set(array):
        array.setCol()
        array.setRow()
        array.A = np.empty(shape=(array.row, array.col), dtype=float)

        for i in range(array.row):
            for j in range(array.col):
                array.setElement(i,j)
     
    def setElement(array,i,j):
        try:
             array.A[i,j] = float(input())
        except:
             print("Envalid Number")
             array.setElement(i,j)


    def setCol(array):
        try:
             array.col = int(input("columns: "))
        except:
             print("Envalid Number")
             array.setCol()

    def setRow(array):
        try:
             array.row = int(input("row: "))
        except:
             print("Envalid Number")
             array.setRow()
        
    def print(array):
        print(array.A)

    def inverse(array):
         try:
             return np.linalg.inv(array.A)
         except:
             print("Your Matrix isn't Valid")
             return None  
    
    def ref(array):
         try:
             return sp.Matrix(array.A).echelon_form()
         except:
             print("Your Matrix isn't Valid")
             return None
    
    def rref(array):
         try:
             return sp.Matrix(array.A).rref()
         except:
             print("Your Matrix isn't Valid")
             return None
    
    def det(array):
         try:
             return np.linalg.det(array.A)
         except:
             print("Your Matrix isn't Valid")
             return None

    def algebra(A,B,opr):
            try:
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
            except:
                  print("Your Matrix isn't Valid")
                  return None
     
    def cramer(A,B):
         try:
             d = A.det()
             n = Matrix()
             n.row = A.row
             n.col = A.col
             for i in range(A.col):
                  n.A = np.copy(A.A)
                  n.A[:,i] = B.A
                  dn = n.det()
                  print(dn/d)
         except:
             print("Your Matrix isn't a valid")
             return None
     
    def linDep(array):
        try:
             M = sp.Matrix(array.A)
             rank = M.rank()

             if rank == array.col:
                  return "The set of vectors is Linearly Independent"
             else:
                  return "The set of vectors is Linearly Dependent"
        except:
             print("Your Matrix isn't Valid")
             return None
     
    def basisDimension(array):
        try:
             M = sp.Matrix(array.A)
             rref_M, pivots = M.rref()
             basis_vectors = [M.col(i) for i in pivots]
             dimension = len(pivots)
             return basis_vectors, dimension
        except:
             print("Your Matrix isn't Valid")
             return None

    def colSpace(array):
        try:
             return sp.Matrix(array.A).columnspace()
        except:
             print("Your Matrix isn't Valid")
             return None

    def rowSpace(array):
        try:
             return sp.Matrix(array.A).rowspace()
        except:
             print("Your Matrix isn't Valid")
             return None
    
    def eigen(array):
         try:
             return np.linalg.eig(array.A)
         except:
             print("Your Matrix isn't Valid")
             return None
    
    def diag(array):
         try:
            return sp.Matrix(array.A).diagonalize()
         except:
             print("Your Matrix isn't Diagonalizable")
             return None
    
    def diagVerify(array):
         try:
               P, D = array.diag()
               return P * D * P.inv()
         except:
             print("Couldn't Verifiy this Matrix")
             return None

#____ODE part____

def solve_first_order(eq_str):
    x = sp.symbols('x')
    y = sp.Function('y')

    eq = sp.sympify(eq_str)

    print("\nDetected first-order ODE.")
    sol = sp.dsolve(sp.Eq(eq, 0))
    return sol


def solve_second_order(eq_str):
    x = sp.symbols('x')
    y = sp.Function('y')

    eq = sp.sympify(eq_str)

    print("\nDetected second-order ODE.")
    sol = sp.dsolve(sp.Eq(eq, 0))
    return sol


def ODE():
    print("=== ODE Solver ===")
    print("Enter your differential equation using sympy syntax.")
    print("Examples:")
    print("  First-order:  y(x).diff(x) + y(x) - x")
    print("  Second-order:  y(x).diff(x,2) + 3*y(x).diff(x) + 2*y(x)")

    eq_str = input("\nEnter ODE = 0 : ")

    # Count derivatives
    order1 = eq_str.count("diff(x)")
    order2 = eq_str.count("diff(x,2)")

    # Decision logic
    if order2 > 0:
        sol = solve_second_order(eq_str)
    elif order1 > 0:
        sol = solve_first_order(eq_str)
    else:
        print("Could not detect differential equation.")
        return

    print("\nSolution:")
    print(sol)

#End of project code here.

class API:
    def __init__(self):
        self.buffer = io.StringIO()

        self.mat1 = Matrix(3,3,[[4,2,2],[6,5,1],[7,3,8]])
        self.mat2 = Matrix(3,3,[[1,2,3],[4,5,6],[7,8,9]])

    def print(self):
        sys.stdout = self.buffer
        self.buffer.truncate(0)
        self.buffer.seek(0)

        self.mat1.print()

        sys.stdout = sys.__stdout__
        return self.buffer.getvalue()


    def send(self, user_input):
        # Capture print output
        sys.stdout = self.buffer
        self.buffer.truncate(0)
        self.buffer.seek(0)

        # Your logic here
        print(f"You entered: {user_input}")

        # Restore real stdout
        sys.stdout = sys.__stdout__

        return self.buffer.getvalue()

html_path = os.path.abspath("index.html")
api = API()
window = webview.create_window("Python GUI Console", html_path, js_api=api)
webview.start()