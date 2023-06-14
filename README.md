# LinkList_Assignment12
**Question 1**<br>
Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL<br>
**Example 1:**<br>
Input:LinkedList: 1->2->3->4->5<br>
Output:1 2 4 5<br>
**Example 2:**<br>
Input:LinkedList: 2->4->6->7->5->1<br>
Output:2 4 6 5 1<br><br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans1.js)<br>
***********************************************************************************************
**Question 2**<br>
Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.<br>
**Example 1:**<br>
Input:N = 3<br>
value[] = {1,3,4}<br>
x(position at which tail is connected) = 2<br>
Output:True<br>
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.<br>
**Example 2:**<br>
Input:N = 4<br>
value[] = {1,8,3,4}<br>
x = 0<br>
Output:False<br>
Explanation:For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans2.js)<br>
***********************************************************************************************
**Question 3**<br>
Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.<br>
**Example 1:**<br>
Input:N = 2<br>
LinkedList: 1->2->3->4->5->6->7->8->9<br>
Output:8<br>
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.<br>
**Example 2:**<br>
Input:N = 5<br>
LinkedList: 10->5->100->5<br>
Output:-1<br>
Explanation:In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans3.js)<br>
***********************************************************************************************
**Question 4**<br>
Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.<br>
![q4](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/img/q4.png)<br>
**Examples:**<br>
Input: R->A->D->A->R->NULL<br>
**Output:** Yes<br>
**Input:** C->O->D->E->NULL<br>
**Output:** No<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans4.js)<br>
***********************************************************************************************
**Question 5**<br>
Given a linked list of **N** nodes such that it may contain a loop.
A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.
Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.<br>
**Example 1:**<br>
Input:N = 3<br>
value[] = {1,3,4}<br>
X = 2<br>
Output:1<br>
Explanation:The link list looks like<br>
1 -> 3 -> 4<br>     
A loop is present. If you remove it
successfully, the answer will be 1.<br>

**Example 2:**<br>
Input:N = 4<br>
value[] = {1,8,3,4}<br>
X = 0<br>
Output:1<br>
Explanation:The Linked list does not
contains any loop.<br>

**Example 3:**<br>
Input:<br>
N = 4<br>
value[] = {1,2,3,4}<br>
X = 1<br>
Output:1<br>
Explanation:The link list looks like<br>
1 -> 2 -> 3 -> 4
A loop is present.
If you remove it successfully,
the answer will be 1.<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans5.js)<br>
***********************************************************************************************
**Question 6**<br>
Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.<br>
Difficulty Level: Rookie<br>
**Examples**:<br>
Input:M = 2, N = 2<br>
Linked List: 1->2->3->4->5->6->7->8<br>
Output:Linked List: 1->2->5->6<br>

Input:M = 3, N = 2<br>
Linked List: 1->2->3->4->5->6->7->8->9->10<br>
Output:Linked List: 1->2->3->6->7->8<br>

Input:M = 1, N = 1<br>
Linked List: 1->2->3->4->5->6->7->8->9->10<br>
Output:Linked List: 1->3->5->7->9<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans6.js)<br>
***********************************************************************************************
**Question 7**
Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.<br>
Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.<br><br>

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans7.js)<br>
***********************************************************************************************
**Question 8**<br>
Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.<br>
A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.<br>
![q5](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/img/q8.png)<br><br>
*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/LinkList_Assignment12/blob/main/ans8.js)<br>
