#include "lists.h"

/**
 * check_cycle - check if list is cycle
 * @list: type listint_t
 * Return: always int
 * casw: 1 true, 0 false
 */
int check_cycle(listint_t *list)
{
	listint_t *lion = list, *tiger = list;

	while (lion != NULL && tiger != NULL && tiger->next != NULL)
	{
		lion = lion->next;
		tiger = tiger->next->next;
		if (lion == tiger)
			return (1);
	}
	return (0);
}
