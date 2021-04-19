(define (isPalindrome a-list)
  (define str-to-lst (string->list a-list))
  (display str-to-lst)
 
  (define (list-reverse str-to-lst result)
    (display a-list)
    (display str-to-lst)
    (if (null? str-to-lst) 
        result
        
        (list-reverse (cdr str-to-lst) (append (list (car str-to-lst)) result))))
    
    (equal? str-to-lst (list-reverse str-to-lst '()))   
)