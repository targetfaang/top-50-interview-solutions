# By dealing with values:

# Time complexity: O(n�)
# Space complexity: O(1)

class Node:
  def __init__(self, data, next = None):
    self.data = data
    self.next = next

class LinkedList:
  def __init__(self, head = None):
    self.head = head

def reverseList(list):
  length = 0
  temp = list.head
  while temp:
    length += 1
    temp = temp.next
  left = list.head
  for i in range(length//2):
    right = list.head
    for j in range(length-i-1):
      right = right.next
    left.data, right.data = right.data, left.data
    left = left.next


