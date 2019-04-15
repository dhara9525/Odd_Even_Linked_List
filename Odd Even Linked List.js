/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */  
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) 
{
    var arr=[];
    var cur=head;
    var prev=new ListNode(null);
    var tail=new ListNode(null);
    var flag=false, myArr=[];
    while(cur!=null)
    {
        if(flag==false)
        {
            prev=cur;
            tail=cur;
            flag=true;
        }
        else
        {
            myArr.push(cur.val);
            prev.next=cur.next;
            flag=false;
        }
        cur=cur.next;
    }
    for(var i=0; i<myArr.length; i++)
    {
        tail.next = new ListNode(myArr[i]);
        tail=tail.next;
    }
    return head;
};