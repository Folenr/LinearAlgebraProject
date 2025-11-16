from tkinter import *

root = Tk()

root.title("Welcome to GeekForGeeks")
root.geometry('350x200')

lbl = Label(root, text = "how old are you?")
lbl.grid()

txt = Entry(root, width=10)
txt.grid(column =1, row =0)

def clicked():

    res = "You age is " + txt.get()
    lbl.configure(text = res)

btn = Button(root, text = "Click me" ,
             fg = "red", command=clicked)
btn.grid(column=2, row=0)

root.mainloop()