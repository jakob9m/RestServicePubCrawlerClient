package org.ics.facade;

import javax.ejb.Local;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

@Local
public interface FacadeLocal {
    public Pub findPubName(String pubName);
    public Beer findBeerName(String beerName);
}
