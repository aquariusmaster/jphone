package com.github.aquariusmaster.jphone.repository;

import com.github.aquariusmaster.jphone.domain.Manager;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Manager entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long> {

}
